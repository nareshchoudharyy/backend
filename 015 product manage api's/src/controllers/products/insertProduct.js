
const insertProduct = async (req, res) => {
    try {
        res.status(200).json({ msg: 'data fetched successfully' });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'internal server error' });
    }
}
module.exports = insertProduct;