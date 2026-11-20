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

            if (pixCol.getBrightness() > highThreshold) {
                pixCol.set(255);
            } else if (pixCol.getBrightness() < lowThreshold) {
                pixCol.set(0);
            }

            frameData.setColor(x, y, pixCol);
        }
    }

    frame.loadData(frameData);
}

//--------------------------------------------------------------
void ofApp::draw() {
    vidGrabber.draw(0, 0);
    frame.draw(camWidth, 0, camWidth, camHeight);
}

//--------------------------------------------------------------
void ofApp::exit() {
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key) {
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key) {
}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y) {
}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button) {
}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button) {
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button) {
}

//--------------------------------------------------------------
void ofApp::mouseScrolled(int x, int y, float scrollX, float scrollY) {
}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y) {
}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y) {
}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h) {
}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg) {
}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo) {
}
