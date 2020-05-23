class Monitor {
    vgaInterface() { console.log('Monitor connected with Laptop via VGA') }
}

class Projector {
    hdmiInterface() { console.log('Monitor connected with Laptop via HDMI') }
}

class ProjectorAdapter {
    constructor(device) {
        this.device = device;
    }

    vgaInterface() {
        this.device.hdmiInterface();
    }
}


class Laptop {
    showPresentation(device) {
        device.vgaInterface()
    }
}

let asus505 = new Laptop;
asus505.showPresentation(new Monitor);
//asus505.showPresentation(new Projector)
//asus505.showPresentation(new ProjectorAdapter(new Projector))
