import './ExcRate.css';
import useState from 'react'

// 구글 환율계산기 참고
// '환율'은 excRate로 명명

const crcOptions = [
	{ value: "KRW", name: "한국 KRW" },
	{ value: "USD", name: "미국 USD" },
	{ value: "JPY", name: "일본 JPY" },
	{ value: "CNY", name: "중국 CNY" },
	{ value: "EUR", name: "독일 EUR" },
	{ value: "GBP", name: "영국 GBP" },
]

const SelectBox = (props) => {
	return (
		<select>
			{props.options.map((option) => (
				<option
					value={option.value}
					// defaultValue 적용안됨
					defaultValue={props.defaultValue === option.value}
				>
					{option.name}
				</option>
			))}
		</select>
	)
}

function ExcRate() {

	return (
		<>
			환율계산기
			<div className='excRateConv'>
				<div className='mainCrcN'>
					기준 국가 및 통화 선택
					<SelectBox options={crcOptions} defaultValue="KRW"></SelectBox>
				</div>
				<div className='amount_before'>
					계산 전 금액 입력 받기 - 단위 표시
					<input type='text' />
				</div>
				<div>
					환전 기호
				</div>
				<div className='excCrcN'>
					교환 국가 및 통화 선택
					<SelectBox options={crcOptions} defaultValue="USD"></SelectBox>
				</div>
				<div className='amount_after'>
					{/* onChange */}
					계산 후 금액 자동 출력 - 단위 표시
					<input type='text' />
				</div>
			</div>
			환율그래프
			<div className='excRateGraph'>

			</div>
		</>
	);
}

export default ExcRate;
