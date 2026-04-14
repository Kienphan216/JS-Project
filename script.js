// Cập nhật tệp script.js

const destinations = [
    {
        type: 'beach',
        name: 'Bãi biển Bora Bora (Polynesia thuộc Pháp)',
        description: 'Được mệnh danh là "Hòn đảo ngọc", Bora Bora nổi tiếng với làn nước trong xanh như ngọc bích, những rạn san hô rực rỡ và các khu nghỉ dưỡng trên mặt nước sang trọng bậc nhất thế giới.',
        // CẬP NHẬT ĐƯỜNG DẪN ẢNH THỰC TẾ
        images: [
            'https://images.unsplash.com/photo-1531110036690-349079f220f1?q=80&w=600&auto=format&fit=crop', // Ảnh 1 (Toàn cảnh bãi biển)
            'https://images.unsplash.com/photo-1533220473952-19e917d84871?q=80&w=600&auto=format&fit=crop'  // Ảnh 2 (Khu nghỉ dưỡng)
        ]
    },
    {
        type: 'temple',
        name: 'Đền Angkor Wat (Campuchia)',
        description: 'Quần thể di tích đền đài lớn nhất thế giới, biểu tượng của nền văn minh Khmer. Angkor Wat không chỉ là một kiệt tác kiến trúc mà còn là một trung tâm tôn giáo quan trọng, thể hiện sự giao thoa giữa Ấn Độ giáo và Phật giáo.',
        // CẬP NHẬT ĐƯỜNG DẪN ẢNH THỰC TẾ
        images: [
            'https://images.unsplash.com/photo-1596401057633-531031c36087?q=80&w=600&auto=format&fit=crop', // Ảnh 1 (Mặt tiền đền lúc bình minh)
            'https://images.unsplash.com/photo-1610443224329-3733230b769f?q=80&w=600&auto=format&fit=crop'  // Ảnh 2 (Chi tiết điêu khắc)
        ]
    },
    {
        type: 'country',
        name: 'Nhật Bản - Xứ sở Hoa anh đào',
        description: 'Sự kết hợp hoàn hảo giữa truyền thống lâu đời và công nghệ hiện đại. Từ những ngôi đền cổ kính ở Kyoto đến nhịp sống hối hả ở Tokyo, Nhật Bản mang đến cho du khách những trải nghiệm đa dạng và sâu sắc.',
        // CẬP NHẬT ĐƯỜNG DẪN ẢNH THỰC TẾ
        images: [
            'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=600&auto=format&fit=crop', // Ảnh 1 (Núi Phú Sĩ)
            'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=600&auto=format&fit=crop'  // Ảnh 2 (Một góc phố Kyoto)
        ]
    }
];

// Hàm searchDestination() giữ nguyên như trước
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
        resultArea.innerHTML = '<p class="error-msg">Không tìm thấy kết quả phù hợp. Hãy thử "beach", "temple" hoặc "Japan".</p>';
    }
}
