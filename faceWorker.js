// faceWorker.js
importScripts('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.9.0/dist/tf.min.js');
importScripts('https://cdn.jsdelivr.net/npm/@tensorflow-models/face-landmarks-detection@0.0.3/dist/face-landmarks-detection.js');

self.onmessage = async (e) => {
  const videoData = e.data.video;
  const model = await faceLandmarksDetection.load(
    faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
  );
  const predictions = await model.estimateFaces({ input: videoData });
  self.postMessage({ detections: predictions });
};