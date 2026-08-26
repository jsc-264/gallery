precision highp float;

varying vec2 pos;

uniform float millis;

float pmap(float n, float start1, float stop1, float start2, float stop2){
    return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
}

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
    float div = 100.;
    float angle = millis/div;
    float rad = .5;
    float x = (.5-rad/2.)*cos(angle)+.5;
    float y = (.5-rad/2.)*sin(angle)+.5;
    vec4 col=inCircle(x,y,rad);
    gl_FragColor=col;
}