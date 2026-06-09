const canvasElement = document.getElementById("skin-canvas");
const btnDownload = document.getElementById("btn-download");
const skinNameElement = document.getElementById("skin-name")
let skinRecently = 'skin/Hibiki.png';



function updateSkinName(skinUrl) {
    let name = skinUrl.split('/').pop() ;
    name = name.replaceAll("_", " ");
    name = name.replaceAll(".png", "")

    if (name === "Maris") {
        name = "Maris (WIP)";
        skinNameElement.textContent = name;
    } else if (name === "Gent") {
        name = "Gent (WIP)";
        skinNameElement.textContent = name;
    } else {
        skinNameElement.textContent = name;
    }
    
}

function updateSkin(skinUrl, modelType) {
    skinRecently = skinUrl;
    viewer.loadSkin(skinRecently, {model: modelType});

    updateSkinName(skinRecently);
}


let viewer = new skinview3d.SkinViewer({
    canvas: canvasElement,
    width: 300,
    height: 300,
    model: "slim",
    skin: skinRecently
});

viewer.animation = new skinview3d.WalkingAnimation();

btnDownload.addEventListener("click", function() {

    let name = skinRecently.split('/').pop();
    name = name.replaceAll("_", " ");
    name = name.replaceAll(".png", "");

    if (name === "Maris") {
        alert("Skin ini masih dalam tahap pengembangan, jadi tunggu saja ya!");
        return;
    } else if (name === "Gent") {
        alert("Skin ini masih dalam tahap pengembangan, jadi tunggu saja ya!");
        return;
    } else {
        fetch(skinRecently)
            .then(respone => respone.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = skinRecently.split("/").pop();
                link.click();  
                
                URL.revokeObjectURL(url);
        });
    }
});

updateSkinName(skinRecently);

