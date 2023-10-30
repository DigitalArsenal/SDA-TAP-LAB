<script lang="ts">
  let isScrolledToBottom = false;

  function onScroll(e: Event) {
    const el: any = e.target;
    if (el.scrollHeight - el.scrollTop === el.clientHeight) {
      isScrolledToBottom = true;
    }
  }

  function downloadPdf() {
    const content = document.getElementById("eulaContent");
    const pdf = html2pdf().from(content).outputPdf();
    pdf.save("EULA.pdf");
  }

  function acceptEULA() {
    // Implement your logic here after accepting the EULA
    alert("EULA Accepted!");
  }
</script>

<div class="container mx-auto px-4">
  <div
    class="bg-white p-8 rounded-lg shadow-lg w-full overflow-y-auto h-screen"
    on:scroll={onScroll}>
    <div id="eulaContent">
      <h1 class="text-2xl font-bold mb-4">End-User License Agreement (EULA)</h1>
      <p class="mb-4">
        This End-User License Agreement ("EULA") is a legal agreement between
        you and DigitalArsenal.io, Inc.
      </p>

      <h2 class="text-xl font-semibold mb-2">1. Definitions</h2>
      <p class="mb-4">
        In this EULA, "Software" refers to SpaceAware.io. "You" refers to the
        individual or entity that has agreed to this EULA.
      </p>

      <h2 class="text-xl font-semibold mb-2">2. License</h2>
      <p class="mb-4">
        Subject to the terms and conditions of this EULA, DigitalArsenal.io,
        Inc. grants you a non-exclusive, non-transferable, non-sublicensable
        license to use the Software.
      </p>

      <h2 class="text-xl font-semibold mb-2">3. Restrictions</h2>
      <p class="mb-4">
        You must not reverse engineer, decompile, or disassemble the Software,
        except as permitted by applicable law.
      </p>
      <p class="mb-4">
        You must not copy, embed, or otherwise use the content on this page
        without a license from DigitalArsenal.io, Inc.
      </p>

      <h2 class="text-xl font-semibold mb-2">4. Termination</h2>
      <p class="mb-4">
        This EULA will terminate immediately without notice if you breach any
        term of this EULA.
      </p>

      <h2 class="text-xl font-semibold mb-2">5. Warranty Disclaimer</h2>
      <p class="mb-4">
        The Software is provided "as-is" and without warranty of any kind.
      </p>

      <h2 class="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
      <p class="mb-4">
        In no event will DigitalArsenal.io, Inc. be liable for any
        consequential, special, incidental, or indirect damages of any kind
        arising from the use of the Software.
      </p>

      <h2 class="text-xl font-semibold mb-2">7. Governing Law</h2>
      <p class="mb-4">
        This EULA is governed by the laws of [Your Jurisdiction].
      </p>

      <h2 class="text-xl font-semibold mb-2">8. Entire Agreement</h2>
      <p class="mb-4">
        This EULA constitutes the entire agreement between you and
        DigitalArsenal.io, Inc. regarding the Software and supersedes all prior
        or contemporaneous understandings.
      </p>
    </div>
    <h2 class="text-xl font-semibold mb-2">9. Software Updates</h2>
    <p class="mb-4">
      DigitalArsenal.io, Inc. may provide updates to the Software from time to
      time. These updates may include bug fixes, feature improvements, and other
      changes. Your continued use of the Software constitutes acceptance of such
      updates.
    </p>

    <h2 class="text-xl font-semibold mb-2">10. Data Collection and Privacy</h2>
    <p class="mb-4">
      DigitalArsenal.io, Inc. may collect data related to your use of the
      Software for the purpose of improving the Software. All data collection
      will be in compliance with our Privacy Policy, which is available on our
      website.
    </p>

    <h2 class="text-xl font-semibold mb-2">
      11. Third-Party Services and Components
    </h2>
    <p class="mb-4">
      The Software may contain third-party services and components that are
      governed by their own terms and conditions. It is your responsibility to
      read and agree to those terms.
    </p>

    <h2 class="text-xl font-semibold mb-2">12. Export Control</h2>
    <p class="mb-4">
      You agree to comply with all applicable export and import laws and
      regulations when using the Software. You must not use the Software in
      violation of any export restriction or embargo by the United States or any
      other applicable jurisdiction.
    </p>

    <h2 class="text-xl font-semibold mb-2">13. Dispute Resolution</h2>
    <p class="mb-4">
      Any dispute arising out of or in connection with this EULA shall be
      resolved through amicable negotiation. If negotiation fails, the dispute
      shall be settled by arbitration in accordance with the laws of [Your
      Jurisdiction].
    </p>

    <h2 class="text-xl font-semibold mb-2">14. Amendments</h2>
    <p class="mb-4">
      DigitalArsenal.io, Inc. reserves the right to amend this EULA at any time.
      Any amendments will be effective upon the posting of the updated EULA on
      our website. Your continued use of the Software constitutes acceptance of
      any amended terms.
    </p>

    <h2 class="text-xl font-semibold mb-2">15. Contact Information</h2>
    <p class="mb-4">
      For any questions about this EULA, you may contact us at
      eula@digitalarsenal.io.
    </p>
    <button
      class="mt-4 p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
      disabled={!isScrolledToBottom}
      on:click={acceptEULA}>
      Accept
    </button>
    <button
      class="mt-4 p-2 bg-green-500 text-white rounded ml-4"
      on:click={downloadPdf}>
      Download as PDF
    </button>
  </div>
</div>
