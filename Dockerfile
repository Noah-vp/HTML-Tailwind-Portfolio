# Use nginx alpine image for a lightweight static file server
FROM nginx:alpine

# Copy all static files to nginx html directory
COPY . /usr/share/nginx/html

# Verify preview images are copied (optional check)
RUN ls -la /usr/share/nginx/html/lib/previews/ || echo "Preview directory check"

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set proper permissions
RUN chmod -R 755 /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

