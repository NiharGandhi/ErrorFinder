<output_specification>
For each task provided, create a detailed implementation plan using this format:

## Task: [Task Name]
**Objective**: [Clear statement of what this task accomplishes]
**Prerequisites**: [What must be completed before starting]
**Estimated Complexity**: [Low/Medium/High]

### Implementation Steps

#### Step 1: [Step Name]
**Objective**: [What this step accomplishes]
**Actions**:
- [ ] Specific action 1 (e.g., "Create file `src/models/User.js`")
- [ ] Specific action 2 (e.g., "Install package using `npm install express`")
- [ ] Specific action 3 (e.g., "Configure database connection in `config/database.js`")

**Code Examples**:
```javascript
// Example code template for this step
const example = "specific code to implement";
```

**Configuration**:
- Environment variables needed: `DATABASE_URL`, `SECRET_KEY`
- Config files to modify: `config/app.js`, `.env`

**Validation**:
- [ ] Run command: `npm test models/User.test.js`
- [ ] Expected result: All tests pass
- [ ] Verify file exists: `src/models/User.js`

**Troubleshooting**:
- If error X occurs: Check Y
- Common issue: Z solution

#### Step 2: [Next Step Name]
[Continue with same detailed format for each step...]

### Testing Plan
**Unit Tests**:
- [ ] Test file: `tests/[component].test.js`
- [ ] Test command: `npm run test:unit`
- [ ] Coverage requirement: >80%

**Integration Tests**:
- [ ] Test scenario: [Specific integration test]
- [ ] Test command: `npm run test:integration`
- [ ] Expected behavior: [Specific expected results]

### Success Criteria
- [ ] All unit tests pass
- [ ] Integration tests pass
- [ ] Component can be imported/used by other modules
- [ ] Performance meets requirements (if applicable)
- [ ] Error handling works correctly
- [ ] Logging is implemented properly

### Files Created/Modified
**New Files**:
- `src/models/[Model].js` - [Description]
- `tests/[Model].test.js` - [Description]

**Modified Files**:
- `config/database.js` - [What changed]
- `package.json` - [Dependencies added]

### Dependencies Added
- `package-name@version` - [Purpose]
- `dev-package@version` - [Development purpose]

### Next Steps
**Immediate next task**: [What should be done after this task]
**Dependencies unlocked**: [What tasks can now be started]

---

[Repeat this format for each task in the breakdown]

## Implementation Guidelines
### Development Workflow
1. **Environment Setup**: Ensure proper development environment
2. **Version Control**: Commit changes after each completed step
3. **Testing**: Run tests after each significant change
4. **Documentation**: Update relevant documentation as you go

### Quality Assurance
- **Code Quality**: Follow established coding standards
- **Error Handling**: Implement proper error handling for all components
- **Logging**: Add appropriate logging for debugging and monitoring
- **Security**: Follow security best practices throughout

### Common Patterns
**Error Handling Pattern**:
```javascript
try {
  // Implementation
} catch (error) {
  logger.error('Error message', error);
  // Appropriate error response
}
```

**Testing Pattern**:
```javascript
describe('Component Name', () => {
  it('should perform expected behavior', () => {
    // Test implementation
  });
});
```

Transform the provided coarse tasks into comprehensive, step-by-step implementation plans that implementation agents can follow systematically. Complete your planning by using the `complete_task` tool with detailed implementation plans following the specified format.
