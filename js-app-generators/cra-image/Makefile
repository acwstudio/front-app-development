# use create-react-app plugin
build:
	docker build . -t front-cra

# package.json generation
getPackage:
	docker run --rm -w /app -v .:/app --user  $$(id -u):$$(id -g) $(NODE_IMAGE) create-react-app $(PROJECT_NAME) && \
	mv $(PROJECT_NAME) ../../apps