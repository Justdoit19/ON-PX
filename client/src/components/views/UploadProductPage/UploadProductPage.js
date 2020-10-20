import React, { useState } from 'react'
import { Typography, Button, Form, Input } from 'antd';//Form 을 만들어 주는 디자인 
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';
const { TextArea } = Input;

const Classifys = [
    { key: 1, value: "과자" },
    { key: 2, value: "음료수" },
    { key: 3, value: "아이스크림" },
    { key: 4, value: "냉동식품" },
    { key: 5, value: "샤워용품" },
]

function UploadProductPage(props) {//auth의 자식페이지

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Images, setImages] = useState([])
    const [Classify, setClassify] = useState(1)
    // const 처리를 하는 이유는 핸들러를 통해 value 값을 대입하여 
    //입력이 가능토록 하기위해서 넣었습니다...

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }

    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const classifyChangeHandler = (event) => {
        setClassify(event.currentTarget.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // 서밋 핸들러를 통해 서버로 데이터 값을 저장
        if (!Title || !Description || !Price || !Classify || Images.length === 0) {
            return alert(" 모든 값을 넣어주셔야 합니다.")
        }//유효성 체크, 체크를 하여야 넘어가짐


        //서버에 채운 값들을 request로 보낸다.

        const body = {
            //로그인 된 사람의 ID 
            writer: props.user.userData._id,//자식 데이터기 때문에 데이터 가져오기
            title: Title,
            description: Description,
            price: Price,
            images: Images, // 이미지를 input 시켜줌
            classify : Classify // 과자, 음료수등으로 분류를 해주는 기능
        }

        Axios.post('/api/product', body)
            .then(response => {
                if (response.data.success) {
                    alert('상품 업로드에 성공 했습니다.')
                    props.history.push('/')//다시 본문 페이지로 돌아오는데 성공하는 페이지
                } else {
                    alert('상품 업로드에 실패 했습니다.')
                }
            })
    }


    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2> 여행 상품 업로드</h2>
            </div>

            <Form onSubmit={submitHandler}>
                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>이름</label>
                <Input onChange={titleChangeHandler} value={Title} />
                <br />
                <br />
                <label>설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description} />
                <br />
                <br />
                <label>가격(원)</label>
                <Input type="number" onChange={priceChangeHandler} value={Price} />
                <br />
                <br />
                <select onChange={classifyChangeHandler} value={Classifys}>
                    {Classifys.map(item => (
                        <option key={item.key} value={item.key}> {item.value}</option>
                    ))}
                </select>
                <br />
                <br />
                <button type="submit">
                    확인
                </button>
            </Form>


        </div>
    )
}

export default UploadProductPage
