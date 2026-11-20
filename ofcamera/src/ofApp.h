#pragma once

#include "ofMain.h"

class ofApp : public ofBaseApp{

	public:
		void setup() override;
		void update() override;
		void draw() override;

		ofVideoGrabber vidGrabber;

		int camWidth;
		int camHeight;

		ofPixels frameData;
		ofTexture frame;

		int highThreshold;
		int lowThreshold;
};
