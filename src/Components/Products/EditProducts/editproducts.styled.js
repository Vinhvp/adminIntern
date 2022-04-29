import styled from 'styled-components';
export const EditProducts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    width: 1230px;
    padding: 12px 0 0;
    background: var(--white);
    position: relative;
    .pagination{
        position: absolute;
        left: 25px;
        bottom: -30px;
        width: 181px;
        height: 20px;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        color: var(--charcoal-grey);
    }
    .pagination_bread{
        padding-right: 3px;
        width: 111px;
        height: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        color: var(--charcoal-grey);
        right: 100px;
        bottom: -30px;
    }
    .Edit{
        text-align: left;
        transform: translateX(-39px);
        margin-bottom: 26px;
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .Product{
        &_info{
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            width: 322px;
            img{
                object-fit: cover;
                width: 50;
                height: 60px;
                margin-right:16px;
            }
            &_title{
                text-align: left;
                h3{
                    width: 221px;
                    height: 20px;
                    font-family: Montserrat;
                    font-size: 14px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.43;
                    letter-spacing: normal;
                    color: var(--charcoal-grey);
                }
                p{
                    width: 144px;
                    height: 22px;
                    font-family: Montserrat;
                    font-size: 12px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.83;
                    letter-spacing: normal;
                    color: var(--greyish);
                }
            }
        }
        &_sold{
            text-align: left;
            width: 46px;
            height: 20px;
            margin: 10px 154px 21px 28px;
            font-family: Montserrat;
            font-size: 14px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.43;
            letter-spacing: normal;
            color: var(--charcoal-grey);
        }
        &_date{
            text-align: left;
            margin: 10px 100px 21px 0px;
            width: 160px;
            height: 20px;
            font-family: Montserrat;
            font-size: 14px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.43;
            letter-spacing: normal;
            color: var(--charcoal-grey);
        }
        &_profit{
            width: 50px;
            height: 20px;
            margin: 10px 150px 21px 0px;
            font-family: Montserrat;
            font-size: 14px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.43;
            letter-spacing: normal;
            color: var(--charcoal-grey);
        }
    }
`