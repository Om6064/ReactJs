import AccordionMain from "./AccordionMain"


const FaqRight = () => {
    let arr = [
        {
            qustion: "Vivamus suscipit tortor eget felis porttitor volutpat?",
            ans: "Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt."
        },
        {
            qustion: "Curabitur aliquet quam id dui posuere blandit?",
            ans: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar."
        },
        {
            qustion: "Sed porttitor lectus nibh ullamcorper sit amet?",
            ans: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum."
        },
        {
            qustion: "Nulla quis lorem ut libero malesuada feugiat?",
            ans: "Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel."
        },

    ]
    return (
        <div>
            {arr.map((item, idx) => {
                return <AccordionMain qus= {item.qustion} ans={item.ans} idx={idx}/>
            })}
        </div>
    )
}

export default FaqRight