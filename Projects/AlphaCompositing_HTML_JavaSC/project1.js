// BackGround is the background image to be changed.
// ForeGround is the foreground image.
// ForeGroundOpacity is the opacity of the foreground image.
// ForeGroundPosition is the The foreground image's location, measured in pixels. It can be negative, and the alignment of the foreground and background's top-left pixels is indicated by (0,0).

function composite(BackGround, ForeGround, ForeGroundOpacity, ForeGroundPosition) {
    //Getting background and foreground data
    var bgData = BackGround.data;
    var fgData = ForeGround.data;
    var width = BackGround.width;
    var height = BackGround.height;

    //Looping in the foreground image to composite it with the background image.
    for (var y = 0; y < ForeGround.height; y++) {
        for (var x = 0; x < ForeGround.width; x++) {
            //Finding index of the fourground image
            var foreGroundPixel = (y * ForeGround.width + x) * 4;
            var bgX = x + ForeGroundPosition.x;
            var bgY = y + ForeGroundPosition.y;

            if (bgX >= 0 && bgX < width && bgY >= 0 && bgY < height) {
                var backGroundPixel = (bgY * width + bgX) * 4;//Finding index of the background image.
                
                //Assigning RGB values for the background and foreground images.
                var foreGroundR = fgData[foreGroundPixel];
                var foreGroundG = fgData[foreGroundPixel + 1];
                var foreGroundB = fgData[foreGroundPixel + 2];
                var foreGroundAlpha = fgData[foreGroundPixel + 3];

                var backGroundR = bgData[backGroundPixel];
                var backGroundG = bgData[backGroundPixel + 1];
                var backGroundB = bgData[backGroundPixel + 2];

                //Calculating the final RGB values for the background image.
                var alpha = foreGroundAlpha * (ForeGroundOpacity / 255);
                var finalR = (1 - alpha) * backGroundR + alpha * foreGroundR;
                var finalG = (1 - alpha) * backGroundG + alpha * foreGroundG;
                var finalB = (1 - alpha) * backGroundB + alpha * foreGroundB;
                
                //Assigning the final RGB values to the background image.
                bgData[backGroundPixel] = finalR;
                bgData[backGroundPixel + 1] = finalG;
                bgData[backGroundPixel + 2] = finalB;
            }
        }
    }
    
}