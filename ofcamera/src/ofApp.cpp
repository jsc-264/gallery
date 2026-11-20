#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup() {
    ofBackground(0, 0, 0);
    camWidth = 640;
    camHeight = 480;

    lowThreshold = 50;
    highThreshold = 250;

    vidGrabber.setVerbose(true);

    vidGrabber.setup(camWidth, camHeight);
}

//--------------------------------------------------------------
void ofApp::update() {
    vidGrabber.update();
    frameData = vidGrabber.getPixels();

    ofColor pixCol;
    for (int y = 0; y < frameData.getHeight(); y++) {
        for (int x = 0; x < frameData.getWidth(); x++) {
            pixCol = frameData.getColor(x, y);

            ofColor newCol(255 - pixCol.r, 255 - pixCol.g, 255 - pixCol.b);

            if (pixCol.getBrightness() > highThreshold) {
                newCol.set(255);
            } else if (pixCol.getBrightness() < lowThreshold) {
                newCol.set(0);
            }

            frameData.setColor(x, y, newCol);
        }
    }

    frame.loadData(frameData);
}

//--------------------------------------------------------------
void ofApp::draw() {
    vidGrabber.draw(0, 0);
    frame.draw(camWidth, 0, camWidth, camHeight);
}