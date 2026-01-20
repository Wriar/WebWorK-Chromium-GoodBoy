# WebWorK-Chromium-GoodBoy
Get called a "Good Boy" when a WeBWorK set is completed.

<table width="100%">
  <tr>
    <td width="70%">
      <h2>Specifications</h2>
      <ul>
        <li>Manifest V3</li>
        <li>Requires Chromium Browser</li>
      </ul>
    </td>
    <td width="30%" rowspan="2"><h2>Sample</h2><img src="https://files.catbox.moe/gpdrbf.png"></td>
  </tr>
  <tr>
    <td>
      <h2>How to Install</h2>
      <ol>
        <li>Create a folder on your computer.</li>
        <li>Copy <code>manifest.json</code> and <code>content.js</code> to that directory.</li>
        <li>In a preferred text editor, such as Notepad, open <code>manifest.json</code></li>
        <li>Replace the 2 base URLs <code>https://*.webworkbase.myschool.edu/*</code> and <code>http://*.webworkbase.myschool.edu/*</code> with the base URL of the webwork instance. Do not delete the wildcards (*. and /*)</li>
        <li>Navigate to your browser's extension tab</li>
        <li>Toggle on Developer Mode.</li>
        <li>Click "Load Unpacked".</li>
        <li>Select the previously mentioned folder.</li>
        <li>Verify that upon completion of some WeBWorK set, you see the "Good Boy" text.</li>
      </ol>
    </td>
  </tr>
</table>


License: MIT
