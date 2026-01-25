// auto-footer.js - 自动添加页脚
document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
    <div style="
        text-align: center;
        padding: 30px 20px;
        color: #666;
        margin-top: 60px;
        border-top: 1px solid #eee;
        font-family: inherit;
    ">
        <div style="margin-bottom: 10px;">
            © ${new Date().getFullYear()} Annie Yu
        </div>
        <div>
            <a href="contact.html" style="color: #667eea; text-decoration: none; margin: 0 10px;">Contact</a> • 
            <a href="index.html" style="color: #666; text-decoration: none; margin: 0 10px;">Home</a>
        </div>
    </div>
     `;