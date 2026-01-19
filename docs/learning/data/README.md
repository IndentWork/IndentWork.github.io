# Learning Data Folder

This folder contains data files managed by CI/CD pipelines.

## Files

- `testimonials.yaml` - Student testimonials displayed on the learning page

## CI/CD Integration

### File Permissions
Grant CI/CD write access to this folder only, keeping code files read-only.

### Adding Testimonials via CI/CD

```bash
# Using yq (recommended)
yq eval '.testimonials += [{"quote": "New testimonial text", "author": "Student Name"}]' \
  -i docs/learning/data/testimonials.yaml

# Using Python with PyYAML
python -c "
import yaml
with open('docs/learning/data/testimonials.yaml') as f:
    data = yaml.safe_load(f)
data['testimonials'].append({'quote': 'New quote', 'author': 'Name'})
with open('docs/learning/data/testimonials.yaml', 'w') as f:
    yaml.dump(data, f, sort_keys=False)
"
```

### Validation Checklist
- ✓ Valid YAML syntax
- ✓ Required fields: `quote` and `author`
- ✓ No sensitive information
- ✓ Proper indentation
