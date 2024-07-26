const viewSlides = async (req, res) => {
    try {
        console.log('working properly')
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'internal server error' });
    }
}
module.exports = viewSlides;