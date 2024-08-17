declare module "cra" {
    interface Address {
        name: string;
        code: string;
    }

    interface CRA {
        getAddress(query: string): Address | Address[] | null;
        generateRandomAddress(level?: number): Address;
    }

    const cra: CRA;
    export default cra;
}
