const classify = [
    {
        "_id": 1,
        "name": "과자"
    },
    {
        "_id": 2,
        "name": "음료수"
    },
    {
        "_id": 3,
        "name": "아이스크림"
    },
    {
        "_id": 4,
        "name": "냉동식품"
    },
    {
        "_id": 5,
        "name": "샤워용품"
    }
]

const price = [
    {
        "_id": 0,
        "name": "모든 값",
        "array": []
    },
    {
        "_id": 1,
        "name": "1000 ~ 3000",
        "array": [1000, 3000]
    },
    {
        "_id": 2,
        "name": "3000 ~ 5000",
        "array": [3000, 5000]
    },
    {
        "_id": 3,
        "name": "5000 ~ 7000",
        "array": [5000, 7000]
    },
    {
        "_id": 4,
        "name": "7000 ~ 10000",
        "array": [280, 299]
    },
    {
        "_id": 5,
        "name": "10000원 이상",
        "array": [10000, 1500000]
    }
]




export {
    price,
    classify
}
