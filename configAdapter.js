const { ETH_CONFIG } = require("./config/eth-config");
const { BSC_CONFIG } = require("./config/bsc-config");
const { HECO_CONFIG } = require("./config/heco-config");
const { KOVAN_CONFIG } = require("./config/kovan-config");
const { MATIC_CONFIG } = require("./config/matic-config");
const { ARB_CONFIG } = require("./config/arb-config");
const { RINKEBY_CONFIG } = require("./config/rinkeby-config");
const { OK_CONFIG } = require("./config/ok-config");
const { AURORA_CONFIG } = require("./config/aurora-config");
const { MOONRIVER_CONFIG } = require("./config/moonriver-config");
const { BOBA_CONFIG } = require("./config/boba-config");
const { AVAX_CONFIG } = require("./config/avax-config"); 
const { DASHBOARD_CONFIG } = require("./config/dashboard-config"); 
const {CFX_CONFIG} = require("./config/cfx-config.js");
const { LINEA_CONFIG } = require("./config/linea-config");
const { BASE_CONFIG } = require("./config/base-config");
const { SCROLL_SEPOLIA_CONFIG } = require("./config/scroll-sepolia-config");
const { MANTA_TESTNET_CONFIG } = require("./config/manta-testnet-config");
const { MANTA_CONFIG } = require("./config/manta-config");
const { MANTLE_CONFIG } = require("./config/mantle-config");
const { OPTIMISM_CONFIG } = require("./config/optimism-config");
const { SCROLL_CONFIG } = require("./config/scroll-config");

exports.GetConfig = function (network, accounts) {
    var CONFIG = {}
    switch (network) {
        case "live":
            CONFIG = ETH_CONFIG
            break;
        case "bsclive":
            CONFIG = BSC_CONFIG
            break;
        case "heco":
            CONFIG = HECO_CONFIG
            break;
        case "matic":
            CONFIG = MATIC_CONFIG
            break;
        case "arb":
            CONFIG = ARB_CONFIG
            break;
        case "ok":
            CONFIG = OK_CONFIG
            break;
        case "moonriver":
            CONFIG = MOONRIVER_CONFIG
            break;
        case "aurora":
            CONFIG = AURORA_CONFIG
            break;
        case "boba":
            CONFIG = BOBA_CONFIG
            break;
        case "avax":
            CONFIG = AVAX_CONFIG
            break;
        case "cfx":
            CONFIG = CFX_CONFIG
            break;
        case "linea":
            CONFIG = LINEA_CONFIG
            break;
        case "base":
            CONFIG = BASE_CONFIG
            break;
        case "dashboard":     
            CONFIG = MANTLE_CONFIG
            break;
        //testnet
        case "kovan":
            CONFIG = KOVAN_CONFIG
            CONFIG.multiSigAddress = accounts[0]
            CONFIG.defaultMaintainer = accounts[0]
            break;
        case "rinkeby":
            CONFIG = RINKEBY_CONFIG
            CONFIG.multiSigAddress = accounts[0]
            CONFIG.defaultMaintainer = accounts[0]
            break;
        case "scroll-sepolia":
            CONFIG = SCROLL_SEPOLIA_CONFIG
            break;
        case "manta-testnet":
            CONFIG = MANTA_TESTNET_CONFIG
            break;
    }
    return CONFIG
}
