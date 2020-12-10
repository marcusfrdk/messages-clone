const generate = (diff, type) => {
    const now = +new Date();
    const ms = diff; // ms
    const s = diff * 1000; // s
    const m = diff * 1000 * 60; // m
    const h = diff * 1000 * 60 * 60; // h
    const d = diff * 1000 * 60 * 60 * 24; // d
    const w = diff * 1000 * 60 * 60 * 24 * 7; // w
    const M = diff * 1000 * 60 * 60 * 24 * 30; // M
    const y = diff * 1000 * 60 * 60 * 24 * 365; // y
    
    let final;

    if(type == "ms"){
        final = now - ms
    } else if (type == "s"){
        final = now - s
    } else if (type == "m"){
        final = now - m
    } else if (type == "h"){
        final = now - h
    } else if (type == "d"){
        final = now - d
    } else if (type == "w"){
        final = now - w
    } else if (type == "M"){
        final = now - M
    } else if (type == "y"){
        final = now - y
    }

    console.log(+new Date(final));
}

generate(process.argv[2], process.argv[3])