precision highp float;

attribute vec3 aPosition;
attribute vec2 aTexCoord;
attribute vec4 aVertexColor;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying vec2 pos;
varying vec4 vVertexColor;

void main(){
    // i have no clue what any of this file does so dont ask
    // Apply the camera transform
    vec4 viewModelPosition=uModelViewMatrix*vec4(aPosition,1.);
    // Tell WebGL where the vertex goes
    gl_Position=uProjectionMatrix*viewModelPosition;
    // Pass along data to the fragment shader
    pos=aTexCoord;
    vVertexColor=aVertexColor;
}