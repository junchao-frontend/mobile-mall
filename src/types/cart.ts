

interface listInt {
    cartItemId: number,
    goodsId: number,
    goodsName: string,
    goodsCount: number,
    goodsCoverImg: string,
    sellingPrice: number
}

export class InitData {
    result: number[] = []
    checked: boolean = false
    list: listInt[] = []
}