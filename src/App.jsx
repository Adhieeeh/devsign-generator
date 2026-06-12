import React, { useState } from 'react';

function App() {
  // 1. State variables to hold user inputs
  const [githubUser, setGithubUser] = useState('');
  const [linkedinUser, setLinkedinUser] = useState('');
  const [twitterUser, setTwitterUser] = useState('');
  const [badgeColor, setBadgeColor] = useState('007bff');
  const [copied, setCopied] = useState(false);

  // 2. Dynamically generate the Markdown string based on inputs
  const generateMarkdown = () => {
    let markdown = `### 🤝 Connect with me\n\n<p align="left">\n`;
    
    if (githubUser) {
      markdown += `<a href="https://github.com/${githubUser}" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github" /></a>\n`;
    }
    if (linkedinUser) {
      markdown += `<a href="https://linkedin.com/in/${linkedinUser}" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-${badgeColor}?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" /></a>\n`;
    }
    if (twitterUser) {
      markdown += `<a href="https://twitter.com/${twitterUser}" target="_blank"><img src="https://img.shields.io/badge/Twitter-${badgeColor}?style=for-the-badge&logo=x&logoColor=white" alt="twitter" /></a>\n`;
    }
    
    markdown += `</p>`;
    return markdown;
  };

  // 3. Handle copying text to the clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(generateMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset "Copied!" notification after 2 seconds
  };

  return (
    <div style={{ maxWidth: '650px', margin: '60px auto', padding: '30px', fontFamily: 'Segoe UI, Roboto, sans-serif', backgroundColor: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      <h1 style={{ color: '#212529', marginBottom: '5px' }}>✒️ DevSign</h1>
      <p style={{ color: '#6c757d', marginTop: '0', marginBottom: '30px' }}>Generate professional Markdown badges for your GitHub Profile README.</p>

      {/* Input Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', color: '#495057' }}>GitHub Username</label>
          <input type="text" placeholder="e.g., Adhieeeh" value={githubUser} onChange={(e) => setGithubUser(e.target.value)} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ced4da', borderRadius: '6px' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', color: '#495057' }}>LinkedIn Username</label>
          <input type="text" placeholder="e.g., john-doe" value={linkedinUser} onChange={(e) => setLinkedinUser(e.target.value)} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ced4da', borderRadius: '6px' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', color: '#495057' }}>Twitter/X Username</label>
          <input type="text" placeholder="e.g., johndoe_dev" value={twitterUser} onChange={(e) => setTwitterUser(e.target.value)} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ced4da', borderRadius: '6px' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', color: '#495057' }}>Theme Badge Color (Hex Code)</label>
          <input type="text" placeholder="e.g., 007bff (Do not include #)" value={badgeColor} onChange={(e) => setBadgeColor(e.target.value)} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ced4da', borderRadius: '6px' }} />
        </div>
      </div>

      {/* Preview Section */}
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e9ecef', marginBottom: '20px' }}>
        <h3 style={{ marginTop: '0', color: '#343a40' }}>Live Profile Preview:</h3>
        {(!githubUser && !linkedinUser && !twitterUser) ? (
          <p style={{ color: '#adb5bd', fontStyle: 'italic' }}>Fill in the inputs above to see your badges...</p>
        ) : (
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px' }}>
            {githubUser && <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />}
            {linkedinUser && <img src={`https://img.shields.io/badge/LinkedIn-${badgeColor}?style=for-the-badge&logo=linkedin&logoColor=white`} alt="LinkedIn" />}
            {twitterUser && <img src={`https://img.shields.io/badge/Twitter-${badgeColor}?style=for-the-badge&logo=x&logoColor=white`} alt="Twitter" />}
          </div>
        )}
      </div>

      {/* Code Generation Section */}
      <div style={{ position: 'relative' }}>
        <pre style={{ backgroundColor: '#212529', color: '#f8f9fa', padding: '15px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', margin: '0' }}>
          {generateMarkdown()}
        </pre>
        <button onClick={handleCopy} style={{ position: 'absolute', top: '10px', right: '10px', padding: '6px 12px', backgroundColor: copied ? '#28a745' : '#495057', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', transition: 'background-color 0.2s' }}>
          {copied ? 'Copied! 🎉' : 'Copy Code'}
        </button>
      </div>
    </div>
  );
}

export default App;