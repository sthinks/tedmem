import React from "react";

function PageBanner({ title, image, color }) {
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
                    backgroundColor: [!color ? "#ffffff6e" : "#ffffff00"],
                }}
            />
            <img src={image} style={{ width: "100%", height: "auto" }} />
            <h1
                className="text-center"
                dangerouslySetInnerHTML={{ __html: title }}
                style={{
                    position: "absolute",
                    color: "white",
                }}
            />
        </div>
    );
}

export default PageBanner;
