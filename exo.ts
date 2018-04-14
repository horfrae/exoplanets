function load() {
    var exo = document.getElementById("exo");
    var gl = exo.getContext("webgl");
    if (!gl) {
        document.querySelector("p").innerHTML =
          "Failed to get WebGL context. "
          + "Your browser or device may not support WebGL.";
        return;
    }
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.enable(gl.SCISSOR_TEST);
    gl.scissor(30, 10, 60, 60);
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}