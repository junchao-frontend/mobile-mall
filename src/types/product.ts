export interface ProductInt {
    goodsCoverImg: string,
    goodsDetailContent: string,
    goodsId: number,
    goodsName: string,
    sellingPrice: number
}

export class InitData {
    goodsForm: ProductInt = {
        goodsCoverImg: '',
        goodsDetailContent: '',
        goodsId: 0,
        goodsName: '',
        sellingPrice: 0
    }
}