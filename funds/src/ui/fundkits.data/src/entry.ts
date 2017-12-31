import { FundBasic, FundBasicModel} from './model/fundbasic/fundbasic_model';

class FundKitsModel{

    constructor(){}

    get_fund_basic_model():FundBasicModel{
        let fund_basic_model:FundBasicModel = new FundBasicModel();
        return fund_basic_model;
    }
}

export {
    FundKitsModel
}