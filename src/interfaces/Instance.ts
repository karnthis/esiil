import IInstanceConfig from "./InstanceConfig";
import IDataPack from "./DataPack";

export default interface IInstance extends IInstanceConfig {
    dataPack(): IDataPack;
    updateConfig(cfg: IInstanceConfig): void;

}
