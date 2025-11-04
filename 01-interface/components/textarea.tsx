import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const TextArea = () => {
  return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup className="w-full">
        <InputGroupTextarea
          id="textarea-code-32"
          placeholder="console.log('Hello, world!');"
          className="min-h-[200px] w-full"
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton size="sm" className="ml-auto" variant="default">
            Run
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            script.js
          </InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs">
            Refresh
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            Copy
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default TextArea
