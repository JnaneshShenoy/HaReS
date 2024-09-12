import { useState } from "react";
import styles from "./DragDropStyles.module.css";

function DragDrop() {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(""); // Error message state

  const handleDrag = (isActive) => {
    setDragActive(isActive);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
    handleDrag(false);
  };

  const handleFileChange = (event) => {
    handleFiles(event.target.files);
  };

  const handleFiles = (incomingFiles) => {
    if (incomingFiles.length > 1) {
      setError("Please upload only one image.");
      return;
    }

    const validFiles = [...incomingFiles].filter((file) => {
      const isValidType = ["image/jpeg", "image/png"].includes(file.type);
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB limit
      return isValidType && isValidSize;
    });

    if (validFiles.length > 0) {
      setFiles(validFiles);
      setError(""); // Clear error if a valid file is uploaded
    }
  };

  const handleRemoveFile = () => {
    setFiles([]);
  };

  const handleCloseError = () => {
    setError(""); // Clear error when closing the dialog box
  };

  return (
    <section id="drag-drop" className={styles.container}>
      <div
        className={`${styles.dragDropContainer} ${dragActive ? styles.dragActive : ""}`}
        onDragEnter={() => handleDrag(true)}
        onDragLeave={() => handleDrag(false)}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <div className={styles.uploadInfo}>
          <p>Upload your image here</p>
          <p>Supported files: .PNG, .JPEG, .JPG (Max size: 5MB)</p>
        </div>
        <div className={styles.browseFileContainer}>
          <input
            type="file"
            id="browse"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png"
            multiple
          />
          <label htmlFor="browse" className={styles.browseBtn}>
            Browse file
          </label>
        </div>
      </div>

      {error && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialogBox}>
            <p>{error}</p>
            <button onClick={handleCloseError} className={styles.closeBtn}>
              Close
            </button>
          </div>
        </div>
      )}

      {files.length > 0 && (
        <div className={styles.fileList}>
          {files.map((file, index) => (
            <div className={styles.fileItem} key={index}>
              <div className={styles.fileInfo}>
                <p>{file.name}</p>
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className={styles.previewImage}
                />
              </div>
              <div className={styles.fileActions}>
                <button onClick={handleRemoveFile}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default DragDrop;
