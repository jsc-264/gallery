precision highp float;

varying vec2 pos;

uniform float mouseX;

void main(){
    vec4 col=vec4(.2588,.1922,.502,1.);
    vec2 centre=vec2(mouseX, 0.5);
    if(distance(pos,centre)<.3){
        col=vec4(.2549,.4549,.8,1.);
    }
    gl_FragColor=col;
}