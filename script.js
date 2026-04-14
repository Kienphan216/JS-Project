const destinations = [
    {
        type: 'beach',
        name: 'Bãi biển Nha Trang',
        description: 'Làn nước trong xanh và những khu nghỉ dưỡng trên mặt nước sang trọng.',
        images: ['https://media.dulich24.com.vn/diemden/bai-bien-nha-trang-5768/bai-bien-nha-trang.jpg', 'https://ik.imagekit.io/tvlk/blog/2022/06/bai-tam-dep-o-nha-trang-10.jpeg?tr=dpr-2,w-675']
    },
    {
        type: 'temple',
        name: 'Đền Angkor Wat',
        description: 'Quần thể di tích đền đài lớn nhất thế giới tại Campuchia.',
        images: ['https://tse2.mm.bing.net/th/id/OIP.JOBMGG1ttJa7qemqEn9rzQHaE7?pid=Api&h=220&P=0', 'https://sophiessuitcase.com/wp-content/uploads/2019/11/angkor-wat-sophies-suitcase.jpg']
    },
    {
        type: 'country',
        name: 'Nhật Bản',
        description: 'Sự kết hợp hoàn hảo giữa truyền thống và công nghệ hiện đại.',
        images: ['https://aloha.edu.vn/wp-content/uploads/2023/10/co-cau-nen-kinh-te-nhat-ban-3.jpg', 'https://ik.imagekit.io/tvlk/blog/2023/03/van-hoa-nhat-ban-5.jpg?tr=dpr-2,w-675']
    }
];

function searchDestination() {
    const input = document.getElementById('destinationInput').value.toLowerCase();
    const resultArea = document.getElementById('recommendation-results');
    resultArea.innerHTML = ''; // Xóa kết quả cũ

    const filtered = destinations.filter(item => item.type.includes(input) || item.name.toLowerCase().includes(input));

    if (filtered.length > 0) {
        filtered.forEach(item => {
            const card = `
                <div class="card">
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <div class="image-group">
                        <img src="${item.images[0]}" alt="${item.name} 1" width="300">
                        <img src="${item.images[1]}" alt="${item.name} 2" width="300">
                    </div>
                </div>
            `;
            resultArea.innerHTML += card;
        });
    } else {
        resultArea.innerHTML = '<p>Không tìm thấy kết quả phù hợp. Hãy thử "beach" hoặc "temple".</p>';
    }
}
