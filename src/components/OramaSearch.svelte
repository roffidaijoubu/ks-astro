<script>
  import {
    getOramaDB,
    search as searchOrama,
  } from "@orama/plugin-astro/client";
  import { writable } from "svelte/store";

  const result = writable([]);
  const showDiv = writable(false);

  async function search(searchTerm) {
    if (searchTerm.length > 2) {
      const db = await getOramaDB("mydb");
      const res = await searchOrama(db, { term: searchTerm });
      let hits = res.hits.map((hit) => ({
        title: hit.document.title,
        path: hit.document.path,
        // content: processContent(searchTerm, hit.document.content),
      }));

      showDiv.set(hits.length > 0);
      result.set(hits);
    } else {
      showDiv.set(false);
    }
  }

  function cleanContent(content) {
    return content.replace(/<|>|\*|\[.*?\]/g, "");
  }

  function processContent(title, content) {
    content = cleanContent(content);

    // Highlight the title in the content
    const regex = new RegExp(`\\b${escapeRegExp(title)}\\b`, "gi");
    content = content.replace(
      regex,
      `<span class="bg-accent text-accent-content">${title}</span>`,
    );

    // Find the highlighted title's index
    const highlightStartIndex = content
      .toLowerCase()
      .indexOf(
        `<span class="bg-accent text-accent-content">${title.toLowerCase()}</span>`,
      );
    if (highlightStartIndex === -1) {
      return content.length > 200 ? content.substring(0, 200) + "..." : content;
    }

    // Extract snippet around the title
    const snippetStart = Math.max(highlightStartIndex - 100, 0); // 100 characters before the title
    const snippetEnd = Math.min(
      highlightStartIndex + 100 + title.length,
      content.length,
    ); // 100 characters after the title

    return (
      content.substring(snippetStart, snippetEnd) +
      (snippetEnd < content.length ? "..." : "")
    );
  }

  // Function to escape RegExp special characters in the title
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
</script>

<input
  type="text"
  class="searchInputBox p-5 w-full"
  on:input={(event) => search(event.target.value)}
/>
{#if $showDiv}
  <div id="searchResults" class="fixed border rounded p-5 z-10 bg-base-200">
    <ul class="menu">
      {#each $result as element, index}
        <li>
          <a href={element.path} class="block">
            <div class="text-base-content">
              <div class="font-bold">{element.title}</div>
              <!-- <div class="text-sm">{@html element.content}</div> -->
            </div>
          </a>
        </li>

        {#if index !== $result.length - 1}
          <br />
        {/if}
      {/each}
    </ul>
  </div>
{/if}
