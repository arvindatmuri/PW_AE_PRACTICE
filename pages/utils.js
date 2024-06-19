const fs = require('fs-extra');
import jdata from '../data.json';


const jsonFilePath = 'data.json';

const createJsonFileIfNotExists = async (data) => {
    try {
        if (!(await fs.pathExists(jsonFilePath))) {
            await fs.writeJson(jsonFilePath, data, { spaces: 4 });
            console.log(`Created ${jsonFilePath} with default data.`);
        } else {
            // console.log(`${jsonFilePath} already exists.`);
            await fs.writeJson(jsonFilePath, data, { spaces: 4 });
        }
    } catch (err) {
        console.error(`Error creating ${jsonFilePath}: ${err.message}`);
    }
}

let readValueFromJsonFile = ()=> {
    // console.log(jdata)
    return jdata.email;
}

module.exports = {createJsonFileIfNotExists, readValueFromJsonFile};

