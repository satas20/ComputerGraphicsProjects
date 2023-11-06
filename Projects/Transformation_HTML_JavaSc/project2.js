// TO DO 1: Provides a 3x3 transformation matrix represented as an array containing 9 values arranged in column-major sequence.
// Initially, the transformation employs scaling, followed by rotation, and ultimately, translation.
// The specified rotation measurement is in degrees.

//Ata Ayyıldız 47854764634
// Section 3
function GetTransform(positionX, positionY, rotation, scale) {
    // Initialize the identity matrix with scale 1 and no rotation or translation
    const transformationMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];

    //Aplying the scaling to the transformation matrix
    transformationMatrix[0] *= scale;
    transformationMatrix[4] *= scale;

    // Convert rotation from degrees to radians
    const rotationInRadians = (rotation * Math.PI) / 180;
    const cos = Math.cos(rotationInRadians);
    const sin = Math.sin(rotationInRadians);
    
    // Applying rotation to the transformation matrix
    const temp = transformationMatrix[0] * cos - transformationMatrix[3] * sin;
    const temp1 = transformationMatrix[1] * cos - transformationMatrix[4] * sin;
    const temp2 = transformationMatrix[0] * sin + transformationMatrix[3] * cos;
    const temp3 = transformationMatrix[1] * sin + transformationMatrix[4] * cos;

    transformationMatrix[0] = temp;
    transformationMatrix[1] = temp1;
    transformationMatrix[3] = temp2;
    transformationMatrix[4] = temp3;

    // Putting x and y values 
    transformationMatrix[6] = positionX;
    transformationMatrix[7] = positionY;

    return transformationMatrix;
}

// TO DO 2: Provides a 3x3 transformation matrix represented as an array containing 9 values arranged in column-major sequence.
// The inputs consist of transformation matrices following the identical format.
// The resulting transformation initially employs trans1 and subsequently applies trans2.
function ApplyTransform(trans1, trans2) {
    const multipliedMatrix = [];

    // Matrix multiplication
    for (let i = 0; i < 3; i++) {
        for (let z = 0; z < 3; z++) {
            let value = 0;
            for (let y = 0; y < 3; y++) {
                value += trans1[i * 3 + y] * trans2[y * 3 + z];
            }
            multipliedMatrix.push(value);
        }
    }

    return multipliedMatrix;
}
