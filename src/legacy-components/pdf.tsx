"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import styles from "./PdfViewer.module.scss";
import {
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiOutlineDownload,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

type PdfViewerProps = {
  fileUrl: string;
};

export default function PdfViewer({ fileUrl }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100); // in %
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 10, 300));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 10, 50));
  const handlePrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setPageNumber((prev) => (numPages ? Math.min(prev + 1, numPages) : prev));

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop() || "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scaledWidth = containerWidth
    ? (containerWidth * zoomLevel) / 100
    : undefined;

  return (
    <div className={styles.viewerWrapper}>
      {/* Sidebar Controls */}
      <div className={styles.sidebar}>
        <div className={styles.zoomBtns}>
          <button onClick={handleZoomOut}>
            <AiOutlineZoomOut />
          </button>
          <span className={styles.zoomLabel}>{zoomLevel}%</span>
          <button onClick={handleZoomIn}>
            <AiOutlineZoomIn />
          </button>
        </div>

        <div className={styles.changePageWrap}>
          <div className={styles.changePage}>
            <button onClick={handlePrevPage} disabled={pageNumber === 1}>
              <AiOutlineLeft />
            </button>
            <span className={styles.pageLabel}>
              {pageNumber} / {numPages}
            </span>
            <button onClick={handleNextPage} disabled={pageNumber === numPages}>
              <AiOutlineRight />
            </button>
          </div>
          <button className={styles.download} onClick={handleDownload}>
            <AiOutlineDownload />
          </button>
        </div>
      </div>

      {/* PDF Display */}
      <div className={styles.documentArea} ref={containerRef}>
        <Document
          file={fileUrl}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {scaledWidth && (
            <Page
              pageNumber={pageNumber}
              width={scaledWidth}
              renderAnnotationLayer
              renderTextLayer
            />
          )}
        </Document>
      </div>
    </div>
  );
}
