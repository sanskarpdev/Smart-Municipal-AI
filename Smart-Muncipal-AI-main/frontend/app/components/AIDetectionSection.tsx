"use client";
import { useState, useRef, useCallback } from "react";

const API_BASE = "http://127.0.0.1:8000";

type DetectionResult = {
  success: boolean;
  issue?: string;
  department?: string;
  priority?: string;
  suggested_action?: string;
  confidence?: number;
  confidence_percent?: number;
  detections_count?: number;
  detections?: Array<{
    class_name: string;
    confidence: number;
    confidence_percent: number;
    box: number[];
  }>;
  detected_issue?: string;
  message?: string;
};

const priorityColors: Record<string, string> = {
  High: "priority-high",
  Medium: "priority-medium",
  Low: "priority-low",
};

const issueIcons: Record<string, string> = {
  Pothole: "🕳️",
  "Garbage Dumping": "🗑️",
  "Damaged Streetlight": "💡",
  "Drainage Overflow": "🌊",
  Unknown: "❓",
};

export default function AIDetectionSection() {
  const [isDragging, setIsDragging] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [confidenceWidth, setConfidenceWidth] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file (JPG, PNG, WEBP).");
      return;
    }
    setImageFile(file);
    setResult(null);
    setError(null);
    setConfidenceWidth(0);
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target?.result as string);
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDetect = async () => {
    if (!imageFile) return;
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("file", imageFile);

      const response = await fetch(`${API_BASE}/predict`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data: DetectionResult = await response.json();
      setResult(data);
      setTimeout(() => setConfidenceWidth(data.confidence_percent ?? 0), 100);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message.includes("fetch")
            ? "Cannot connect to AI server. Make sure the FastAPI backend is running on port 8000."
            : err.message
          : "Detection failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setImageFile(null);
    setImagePreview(null);
    setResult(null);
    setError(null);
    setConfidenceWidth(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <section id="ai-detection" className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-blue-500/30">
            <span className="live-dot w-2 h-2 bg-green-400 rounded-full"></span>
            AI Model — Online
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            🤖 AI Issue Detection Engine
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Upload any photo of a municipal issue. Our YOLO model will detect the problem,
            identify the responsible department, and suggest corrective action.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Upload Panel */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-sm">📤</span>
              Upload Image
            </h3>

            {/* Drop Zone */}
            {!imagePreview ? (
              <div
                id="ai-dropzone"
                className={`upload-zone rounded-xl p-10 text-center cursor-pointer ${isDragging ? "drag-over" : ""}`}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="text-5xl mb-4">📸</div>
                <p className="text-white font-semibold text-lg mb-2">Drop image here</p>
                <p className="text-blue-300 text-sm mb-4">or click to browse files</p>
                <span className="bg-blue-600/30 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30">
                  JPG, PNG, WEBP supported
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                />
              </div>
            ) : (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Uploaded preview"
                  className="w-full rounded-xl object-cover max-h-64"
                />
                <button
                  id="ai-reset-btn"
                  onClick={reset}
                  className="absolute top-2 right-2 bg-gray-900/80 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  ✕
                </button>
                <div className="mt-3 flex items-center gap-2 text-blue-200 text-sm">
                  <span>📎</span>
                  <span className="truncate">{imageFile?.name}</span>
                  <span className="text-blue-400 text-xs ml-auto">
                    {imageFile ? (imageFile.size / 1024).toFixed(1) + " KB" : ""}
                  </span>
                </div>
              </div>
            )}

            {/* Detect Button */}
            <button
              id="ai-detect-btn"
              onClick={handleDetect}
              disabled={!imageFile || isLoading}
              className={`w-full mt-5 py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-3 ${
                !imageFile
                  ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                  : isLoading
                  ? "bg-blue-700 text-white cursor-wait"
                  : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02]"
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Analyzing with AI...
                </>
              ) : (
                <>
                  <span>🔍</span>
                  Detect Municipal Issue
                </>
              )}
            </button>

            {/* Error */}
            {error && (
              <div className="mt-4 bg-red-500/20 border border-red-500/40 text-red-300 rounded-xl p-4 text-sm flex gap-3">
                <span className="text-xl shrink-0">⚠️</span>
                <div>
                  <p className="font-semibold mb-1">Detection Error</p>
                  <p>{error}</p>
                </div>
              </div>
            )}

            {/* Model info */}
            <div className="mt-5 bg-white/5 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600/30 rounded-lg flex items-center justify-center text-lg">🧠</div>
              <div>
                <p className="text-white text-sm font-medium">YOLO Detection Model</p>
                <p className="text-blue-300 text-xs">4 Classes • 94%+ Accuracy • Real-time</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="live-dot w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-green-400 text-xs font-medium">Ready</span>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-sm">📊</span>
              Detection Results
            </h3>

            {!result && !isLoading && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4 opacity-30">🔎</div>
                <p className="text-blue-300 text-lg font-medium">Awaiting Image</p>
                <p className="text-blue-400/60 text-sm mt-2">Upload an image and click Detect to see results</p>
              </div>
            )}

            {isLoading && (
              <div className="space-y-4 py-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="shimmer h-12 rounded-xl" />
                ))}
                <p className="text-blue-300 text-center text-sm animate-pulse">
                  🧠 AI model is analyzing your image...
                </p>
              </div>
            )}

            {result && (
              <div className="space-y-4 fade-up">
                {result.detected_issue === "Unknown" || !result.issue ? (
                  <div className="text-center py-10">
                    <div className="text-6xl mb-4">❓</div>
                    <p className="text-white font-bold text-lg mb-2">No Issue Detected</p>
                    <p className="text-blue-300 text-sm">{result.message}</p>
                    <p className="text-blue-400 text-xs mt-2">Try uploading a clearer image of the issue.</p>
                  </div>
                ) : (
                  <>
                    {/* Issue banner */}
                    <div className="bg-gradient-to-r from-blue-600/30 to-blue-500/20 border border-blue-500/40 rounded-xl p-5">
                      <div className="flex items-start gap-4">
                        <span className="text-4xl">
                          {issueIcons[result.issue] ?? "🏙️"}
                        </span>
                        <div className="flex-1">
                          <p className="text-blue-200 text-xs font-medium uppercase tracking-wider mb-1">
                            Detected Issue
                          </p>
                          <p className="text-white font-extrabold text-xl">{result.issue}</p>
                          <p className="text-blue-300 text-sm mt-1 flex items-center gap-1">
                            <span>🏢</span> {result.department}
                          </p>
                        </div>
                        <span
                          className={`text-xs font-bold px-3 py-1.5 rounded-lg ${
                            priorityColors[result.priority ?? "Medium"]
                          }`}
                        >
                          {result.priority} PRIORITY
                        </span>
                      </div>
                    </div>

                    {/* Confidence */}
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-blue-200 font-medium">AI Confidence</span>
                        <span className="text-white font-bold">{result.confidence_percent?.toFixed(1)}%</span>
                      </div>
                      <div className="confidence-bar">
                        <div className="confidence-fill" style={{ width: `${confidenceWidth}%` }} />
                      </div>
                      <p className="text-blue-400 text-xs mt-2">
                        {result.detections_count} detection(s) found in image
                      </p>
                    </div>

                    {/* Suggested action */}
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                      <p className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        ✅ Suggested Action
                      </p>
                      <p className="text-white text-sm leading-relaxed">{result.suggested_action}</p>
                    </div>

                    {/* All detections */}
                    {result.detections && result.detections.length > 1 && (
                      <div className="bg-white/5 rounded-xl p-4">
                        <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-3">
                          All Detections
                        </p>
                        <div className="space-y-2">
                          {result.detections.map((det, i) => (
                            <div key={i} className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <span>{issueIcons[det.class_name] ?? "📍"}</span>
                                <span className="text-white capitalize">
                                  {det.class_name.replace(/_/g, " ")}
                                </span>
                              </div>
                              <span className="text-blue-300 font-medium">
                                {det.confidence_percent.toFixed(1)}%
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        id="ai-submit-complaint"
                        className="bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                      >
                        <span>📋</span> Submit Complaint
                      </button>
                      <button
                        id="ai-download-report"
                        onClick={() => {
                          const report = JSON.stringify(result, null, 2);
                          const blob = new Blob([report], { type: "application/json" });
                          const url = URL.createObjectURL(blob);
                          const a = document.createElement("a");
                          a.href = url;
                          a.download = "detection_report.json";
                          a.click();
                        }}
                        className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 border border-white/20"
                      >
                        <span>⬇️</span> Download Report
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
