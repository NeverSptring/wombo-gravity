#include "JsonWriter.hpp"

#include <stdio.h>
#include <cstdio>
#include <iostream>
#include <fstream>
#include <vector>
#include <queue>

using namespace std;

JsonWriter::JsonWriter(string filename) {
    this->filename = filename;
}

void JsonWriter::append(Frame frame) {
    Json::Value frameJson;
    frameJson["frameNumber"] = frame.frameNumber;

    Json::Value bodies_node;
    for (unsigned int i = 0; i < frame.bodies.size(); i++) {
        bodies_node.append(frame.bodies[i].toJson());
    }

    frameJson["bodies"] = bodies_node;
    this->framesJson.append(frameJson);
}

void JsonWriter::flush() {
    Json::Value root;
    root["frames"] = framesJson;
    ofstream jsonOut;

    jsonOut.open(filename.c_str());
    jsonOut << root;
    jsonOut.close();
}
