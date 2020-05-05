import { ElementSize } from "@/types/state";

export function calcCanvasSize(imgSize: ElementSize, wrapperSize: ElementSize): ElementSize {
  if (imgSize.width < wrapperSize.width && imgSize.height < wrapperSize.height) {
    return {
      width: imgSize.width,
      height: imgSize.height,
    };
  } else {
    const widthRatio = imgSize.width / wrapperSize.width;
    const heightRatio = imgSize.height / wrapperSize.height;

    if (widthRatio > heightRatio) {
      return {
        width: wrapperSize.width,
        height: (imgSize.height * wrapperSize.width) / imgSize.width,
      };
    } else {
      return {
        width: (imgSize.width * wrapperSize.height) / imgSize.height,
        height: wrapperSize.height,
      };
    }
  }
}
