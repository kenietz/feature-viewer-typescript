declare class ComputingFunctions {
    commons: any;
    rectWidth2: (d: any) => number;
    rectX: (object: any) => any;
    arrowPath: (d: any) => string;
    protected displaySequence(seq: any): boolean;
    protected gradientColor(stringContent: any): any;
    protected forcePropagation(item: any): void;
    constructor(commons: {});
}
export default ComputingFunctions;
