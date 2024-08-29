<template>
  <div>
    <div v-if="editor">
<!--      <button-->
<!--        @click="editor.chain().focus().toggleBold().run()"-->
<!--        :disabled="!editor.can().chain().focus().toggleBold().run()"-->
<!--        :class="{ isActive : editor.isActive('bold') }"-->
<!--      >-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#b0b0b0" d="M18.002 2.997H5.999A3.01 3.01 0 0 0 2.997 6v12.002a3.01 3.01 0 0 0 3.002 3.001h12.003a3.01 3.01 0 0 0 3.001-3.001V6a3.01 3.01 0 0 0-3.001-3.003m-1.64 12.647c-.152.36-.389.68-.693.927a3.6 3.6 0 0 1-1.206.614q-.735.228-1.75.229H7.888V6.909h5.103q1.415-.002 2.267.646c.569.436.854 1.082.854 1.958q0 .794-.389 1.357q-.389.56-1.111.868v.034c.642.135 1.137.438 1.464.912q.492.71.493 1.789c0 .405-.078.788-.225 1.147l.02.021v.003zm-2.084-2.589q-.462-.421-1.297-.419H9.737v3.276h3.253c.554 0 .991-.144 1.298-.435q.463-.435.464-1.229c-.005-.518-.156-.919-.464-1.193h-.014zm-.451-2.119c.299-.251.444-.613.444-1.084c0-.526-.131-.902-.397-1.116c-.264-.214-.646-.326-1.146-.326H9.727v2.898h3.001c.436.001.81-.127 1.099-.372"/></svg>-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().toggleItalic().run()"-->
<!--        :disabled="!editor.can().chain().focus().toggleItalic().run()"-->
<!--        :class="{ isActive : editor.isActive('italic') }"-->
<!--      >-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14"><path fill="none" stroke="#b0b0b0" stroke-linecap="round" stroke-linejoin="round" d="m4.5 13.5l5-13m-4 0H13m-12 13h7.5"/></svg>-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().toggleStrike().run()"-->
<!--        :disabled="!editor.can().chain().focus().toggleStrike().run()"-->
<!--        :class="{ isActive : editor.isActive('strike') }"-->
<!--      >-->
<!--        strike-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().toggleCode().run()"-->
<!--        :disabled="!editor.can().chain().focus().toggleCode().run()"-->
<!--        :class="{ isActive : editor.isActive('code') }"-->
<!--      >-->
<!--        code-->
<!--      </button>-->
<!--      <button @click="editor.chain().focus().unsetAllMarks().run()">-->
<!--        clear marks-->
<!--      </button>-->
<!--      <button @click="editor.chain().focus().clearNodes().run()">-->
<!--        clear nodes-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().setParagraph().run()"-->
<!--        :class="{ isActive : editor.isActive('paragraph') }"-->
<!--      >-->
<!--        paragraph-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"-->
<!--        :class="{ isActive : editor.isActive('heading', { level: 1 }) }"-->
<!--      >-->
<!--        h1-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"-->
<!--        :class="{ isActive : editor.isActive('heading', { level: 2 }) }"-->
<!--      >-->
<!--        h2-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"-->
<!--        :class="{ isActive : editor.isActive('heading', { level: 3 }) }"-->
<!--      >-->
<!--        h3-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"-->
<!--        :class="{ isActive : editor.isActive('heading', { level: 4 }) }"-->
<!--      >-->
<!--        h4-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"-->
<!--        :class="{ isActive : editor.isActive('heading', { level: 5 }) }"-->
<!--      >-->
<!--        h5-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"-->
<!--        :class="{ isActive : editor.isActive('heading', { level: 6 }) }"-->
<!--      >-->
<!--        h6-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().toggleBulletList().run()"-->
<!--        :class="{ isActive : editor.isActive('bulletList') }"-->
<!--      >-->
<!--        bullet list-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().toggleOrderedList().run()"-->
<!--        :class="{ isActive : editor.isActive('orderedList') }"-->
<!--      >-->
<!--        ordered list-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().toggleCodeBlock().run()"-->
<!--        :class="{ isActive : editor.isActive('codeBlock') }"-->
<!--      >-->
<!--        code block-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().toggleBlockquote().run()"-->
<!--        :class="{ isActive : editor.isActive('blockquote') }"-->
<!--      >-->
<!--        blockquote-->
<!--      </button>-->
<!--      <button @click="editor.chain().focus().setHorizontalRule().run()">-->
<!--        horizontal rule-->
<!--      </button>-->
<!--      <button @click="editor.chain().focus().setHardBreak().run()">-->
<!--        hard break-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().undo().run()"-->
<!--        :disabled="!editor.can().chain().focus().undo().run()"-->
<!--      >-->
<!--        undo-->
<!--      </button>-->
<!--      <button-->
<!--        @click="editor.chain().focus().redo().run()"-->
<!--        :disabled="!editor.can().chain().focus().redo().run()"-->
<!--      >-->
<!--        redo-->
<!--      </button>-->
    </div>
    <TiptapEditorContent :editor="editor" />
  </div>
</template>

<script setup>
const isActive = ref(false)
const editor = useEditor({
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [TiptapStarterKit],
});

onMounted(() => {
  if (!!unref(editor)) {
    // Will work fine because this is executed on Client side
    unref(editor).commands.setContent("<p>I'm running Tiptap with Vue.js. 🎉</p>");
  }
});


onBeforeUnmount(() => {
  unref(editor).destroy();
});

</script>
