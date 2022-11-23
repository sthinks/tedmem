import React from "react";

function PageBanner({ title, image }) {
    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#ffffff6e",
                }}
            />
            <img src={image} style={{ width: "100%", height: "auto" }} />
            <h1 style={{ position: "absolute", color: "white" }}>{title}</h1>
        </div>
    );
}

export default PageBanner;
