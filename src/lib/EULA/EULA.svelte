<script lang="ts">
  import { onMount } from "svelte";
  import DALogo from "@/assets/da-wide.png";
  import sda from "@/assets/sda-credit.png";
  import { eulaVersion, showEULA } from "@/stores/eula.store";
  import { IP } from "@/stores/user.store";

  let isScrolledToBottom = false;
  const eulaUUID = "7e6d9cc1-5856-4238-90bf-7465b3b3446d:EULA";
  const eulaVersionUUID = "9b3babdc-ee1a-4435-b8a5-14ebf2665bdf:EULA:VERSION";
  function agree() {
    localStorage.setItem(eulaUUID, "true");
    localStorage.setItem(eulaVersionUUID, JSON.stringify($eulaVersion));

    $showEULA = false;
  }
  onMount(() => {
    const eulaLocalAccepted = localStorage.getItem(eulaUUID);
    const eulaLocalVersion = localStorage.getItem(eulaVersionUUID);

    if (
      eulaLocalAccepted === null ||
      eulaLocalVersion === null ||
      parseFloat(eulaLocalVersion) < $eulaVersion
    ) {
    } else {
      $showEULA = false;
    }
  });
  function onScroll(e: Event) {
    const el: any = e.target;

    if (el.scrollHeight - el.scrollTop < el.clientHeight * 1.25) {
      isScrolledToBottom = true;
    }
  }
</script>

<div
  id="EULA"
  class="flex flex-col items-center justify-center h-[100%] text-black">
  <div class="flex flex-col justify-bottom items-center">
    <img
      src={DALogo}
      alt="DigitalArsenal.io"
      class="mb-16 h-16"
      style="filter: invert(1);" />
  </div>
  <div
    class="text-xs text-gray-400 font-normal flex justify-between text-white w-2/3">
    <a class="text-xs font-normal text-white" href="https://digitalarsenal.io"
      >https://digitalarsenal.io</a>
    <div>{$eulaVersion.toFixed(1)}</div>
  </div>
  <div
    class="bg-white p-8 rounded-sm shadow-lg w-2/3 max-h-[50%] overflow-y-auto"
    on:scroll={onScroll}>
    <h1 class="text-2xl font-bold mb-4">End-User License Agreement (EULA)</h1>
    <p class="mb-4">
      This End-User License Agreement ("EULA") is a legal agreement between you
      and DigitalArsenal.io, Inc.
    </p>

    <h2 class="text-xl font-semibold mb-2">1. Definitions</h2>
    <p class="mb-4">
      In this EULA, "Software" refers to SpaceAware.io. "You" refers to the
      individual or entity that has agreed to this EULA.
    </p>

    <h2 class="text-xl font-semibold mb-2">2. License</h2>
    <p class="mb-4">
      Subject to the terms and conditions of this EULA, DigitalArsenal.io, Inc.
      grants you a non-exclusive, non-transferable, non-sublicensable license to
      use the Software.
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
      This EULA will terminate immediately without notice if you breach any term
      of this EULA.
    </p>

    <h2 class="text-xl font-semibold mb-2">5. Warranty Disclaimer</h2>
    <p class="mb-4">
      The Software is provided "as-is" and without warranty of any kind.
    </p>

    <h2 class="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
    <p class="mb-4">
      In no event will DigitalArsenal.io, Inc. be liable for any consequential,
      special, incidental, or indirect damages of any kind arising from the use
      of the Software.
    </p>

    <h2 class="text-xl font-semibold mb-2">7. Governing Law</h2>
    <p class="mb-4">
      This EULA is governed by the laws of The Commonwealth of Virginia, United
      States.
    </p>

    <h2 class="text-xl font-semibold mb-2">8. Entire Agreement</h2>
    <p class="mb-4">
      This EULA constitutes the entire agreement between you and
      DigitalArsenal.io, Inc. regarding the Software and supersedes all prior or
      contemporaneous understandings.
    </p>

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
      shall be settled by arbitration in accordance with the laws of The
      Commonwealth of Virginia, United States.
    </p>

    <h2 class="text-xl font-semibold mb-2">14. Amendments</h2>
    <p class="mb-4">
      DigitalArsenal.io, Inc. reserves the right to amend this EULA at any time.
      Any amendments will be effective upon the posting of the updated EULA on
      our website. Your continued use of the Software constitutes acceptance of
      any amended terms.
    </p>

    <h2 class="text-xl font-semibold mb-2">15. Contact Information</h2>
    <p id="eula-contact" class="mb-4">
      For any questions about this EULA, you may contact us at
      eula@digitalarsenal.io.
    </p>
  </div>

  {#if $IP?.length}
    <div class="text-gray-400 text-[.75rem] w-2/3 text-right">
      User IP: {$IP}
    </div>
  {/if}

  <button
    class:bg-gray-300={!isScrolledToBottom}
    class:bg-gradient-green={isScrolledToBottom}
    class:text-white={isScrolledToBottom}
    class="mt-4 p-3 text-white border-[1px] rounded-sm disabled:text-gray-600"
    disabled={!isScrolledToBottom}
    on:click={agree}>
    I AGREE
  </button>
</div>
<div class="fixed bottom-0 right-0">
  <div class="text-gray-400 text-xs mb-1 ml-2">IN SUPPORT OF:</div>
<img
src={sda}
alt="SDA"
class="mb-4 h-8"
style="filter: invert(1);" />
</div>
<style>
</style>
