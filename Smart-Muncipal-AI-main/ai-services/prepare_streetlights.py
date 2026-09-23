from pathlib import Path
import shutil

SOURCE = Path(r"E:\muncipal.ai\damaged_lights_dataset")
DEST = Path(r"E:\muncipal.ai\ai-services\final_dataset")

FINAL_CLASS = 2

for split in ["train", "valid", "test"]:

    src_images = SOURCE / split / "images"
    src_labels = SOURCE / split / "labels"

    dst_images = DEST / split / "images"
    dst_labels = DEST / split / "labels"

    print(f"Processing {split}...")

    for label_file in src_labels.glob("*.txt"):

        lines = label_file.read_text().splitlines()

        # Keep only class 0 = Not Working
        damaged_lines = [
            line for line in lines
            if line.strip() and line.split()[0] == "0"
        ]

        if not damaged_lines:
            continue

        image_stem = label_file.stem
        image_file = None

        for ext in [".jpg", ".jpeg", ".png", ".webp"]:
            candidate = src_images / (image_stem + ext)

            if candidate.exists():
                image_file = candidate
                break

        if image_file is None:
            continue

        shutil.copy2(
            image_file,
            dst_images / image_file.name
        )

        # Convert class 0 → final class 2
        output_label = "\n".join(
            f"{FINAL_CLASS} " + " ".join(line.split()[1:])
            for line in damaged_lines
        )

        (dst_labels / label_file.name).write_text(
            output_label + "\n"
        )

print("Damaged streetlight dataset added successfully!")