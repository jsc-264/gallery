precision highp float;

varying vec2 pos;

uniform float millis;

vec4 inCircle(float x,float y,float rad){
    vec4 bg=vec4(.3725,.1725,.651,1.);
    vec4 fill=vec4(.1137,.4118,.6549,1.);
    vec2 centre=vec2(x,y);
    float d=distance(pos,centre);
    d=smoothstep(0.,rad,d);
    vec4 col=mix(fill,bg,d);
    return col;
}

void main(){
    float rad = .2;
    float x = cos(millis/4000.);
    float y = sin(millis/4000.);
    vec4 col=inCircle(x,y,rad);
    gl_FragColor=col;
}