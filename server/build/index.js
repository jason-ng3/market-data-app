"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const MarketDataModel_1 = __importDefault(require("./MarketDataModel"));
const app = (0, express_1.default)();
const PORT = 3001;
const url = process.env.MONGODB_URI;
console.log(url);
if (!url) {
    throw new Error('MongoDB URI is not defined');
}
mongoose_1.default.connect(url);
app.use((0, cors_1.default)());
app.get('/api/market-data', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const marketData = yield MarketDataModel_1.default.find({});
    res.json(marketData);
}));
app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});
