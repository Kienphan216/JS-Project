const destinations = [
    {
        type: 'beach',
        name: 'Bãi biển Bora Bora',
        description: 'Làn nước trong xanh và những khu nghỉ dưỡng trên mặt nước sang trọng.',
        images: ['https://example.com/beach1.jpg', 'https://example.com/beach2.jpg']
    },
    {
        type: 'temple',
        name: 'Đền Angkor Wat',
        description: 'Quần thể di tích đền đài lớn nhất thế giới tại Campuchia.',
        images: ['https://example.com/temple1.jpg', 'https://example.com/temple2.jpg']
    },
    {
        type: 'country',
        name: 'Nhật Bản',
        description: 'Sự kết hợp hoàn hảo giữa truyền thống và công nghệ hiện đại.',
        images: ['https://example.com/japan1.jpg', 'https://example.com/japan2.jpg']
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
