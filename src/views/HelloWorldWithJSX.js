export default {
    props: {
        msg: {
            type: String,
            default: 'hello 小米'
        },
    },
    render(h) {
        return (
            <div>
                {this.msg}
            </div>
        )
    }
}